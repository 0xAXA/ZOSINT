'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import GlobalParticleBackground from './components/GlobalParticleBackground';
import SearchSummary from './components/SearchSummary';
import MetricCardGrid from './components/MetricCardGrid';
import PremiumModules from './components/PremiumModules';
import TimelineView from './components/TimelineView';
import PaletteView from './components/PaletteView';
import MapView from './components/MapView';
import DataGalleries from './components/DataGalleries';
import PhoneHintComposer from './components/PhoneHintComposer';
import ResultsGrid from './components/ResultsGrid';
import AccountCheckers from './components/AccountCheckers';
import reportData from '../lib/mock-data.json';
import { Node, Edge } from 'reactflow';

// Convert mock data nodes to React Flow format
function convertNodesToReactFlow(nodes: any[]): Node[] {
  return nodes.map((node) => ({
    id: node.id,
    type: node.type || 'platform',
    position: node.position,
    data: { label: node.label },
  }));
}

function convertEdgesToReactFlow(edges: any[]): Edge[] {
  return edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    animated: true,
    style: { stroke: '#00FFEE', strokeWidth: 2 },
  }));
}

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-z-glow">Loading...</div>
      </main>
    );
  }

  const flowNodes = convertNodesToReactFlow(reportData.networkGraph.nodes);
  const flowEdges = convertEdgesToReactFlow(reportData.networkGraph.edges);

  return (
    <main className="min-h-screen relative">
      <GlobalParticleBackground />
      <Header />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Search Summary */}
        <SearchSummary query={reportData.searchQuery} />

        {/* Metric Cards */}
        <MetricCardGrid summary={reportData.summary} />

        {/* Premium Modules */}
        <PremiumModules available={reportData.summary.premiumModulesAvailable} />

        {/* Timeline View */}
        <TimelineView events={reportData.timeline} />

        {/* Network Graph */}
        <PaletteView nodes={flowNodes} edges={flowEdges} />

        {/* Map View */}
        <MapView locations={reportData.locations} />

        {/* Data Galleries */}
        <DataGalleries
          breaches={reportData.breachedAccounts}
          profilePictures={reportData.profilePictures}
        />

        {/* Phone Hint Composer */}
        <PhoneHintComposer
          possibleNumbers={reportData.phoneHints.possibleNumbers}
          carriers={reportData.phoneHints.carriers}
          locations={reportData.phoneHints.locations}
        />

        {/* Results Grid */}
        <ResultsGrid services={reportData.services} />

        {/* Account Checkers */}
        <AccountCheckers
          categories={reportData.accountCheckers.categories}
          allPlatforms={reportData.accountCheckers.allPlatforms}
        />
      </div>
    </main>
  );
}