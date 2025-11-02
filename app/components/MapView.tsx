'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import HolofoilCard from './ui/HolofoilCard';

interface Location {
  id: string;
  name: string;
  coordinates: [number, number];
  source: string;
  timestamp: string;
}

interface MapViewProps {
  locations: Location[];
}

export default function MapView({ locations }: MapViewProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize Mapbox (you'll need to add your token)
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    
    if (!token) {
      // Fallback: show a placeholder instead of map
      return;
    }

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox/dark-v11',
      center: locations[0]?.coordinates || [-122.4194, 37.7749],
      zoom: 10,
    });

    // Add custom pins
    locations.forEach((location) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.innerHTML = `<div style="
        width: 20px;
        height: 20px;
        background: #00FFEE;
        border: 2px solid #00FFEE;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 255, 238, 0.8);
      "></div>`;
      
      new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <div style="color: #F0F0F0; font-family: Inter;">
              <strong>${location.name}</strong><br/>
              <span style="font-size: 12px; color: #888899;">${location.source}</span>
            </div>
          `)
        )
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, [locations]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <HolofoilCard>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between mb-4"
        >
          <h3 className="text-xl font-semibold text-text-primary">Location Map</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-z-glow" size={24} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN ? (
                <div
                  style={{
                    width: '100%',
                    height: '500px',
                    borderRadius: '8px',
                    background: 'rgba(10, 0, 26, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed rgba(0, 255, 238, 0.3)',
                  }}
                  className="text-text-muted"
                >
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 text-z-glow" size={32} />
                    <p>Mapbox token required</p>
                    <p className="text-xs mt-1">Add NEXT_PUBLIC_MAPBOX_TOKEN to .env</p>
                  </div>
                </div>
              ) : (
                <div
                  ref={mapContainer}
                  style={{ width: '100%', height: '500px', borderRadius: '8px' }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </HolofoilCard>
    </motion.div>
  );
}
