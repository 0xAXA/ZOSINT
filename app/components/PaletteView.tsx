'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import HolofoilCard from './ui/HolofoilCard';

interface PaletteViewProps {
  nodes: Node[];
  edges: Edge[];
}

export default function PaletteView({ nodes: initialNodes, edges: initialEdges }: PaletteViewProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Custom node styles
  const nodeStyle = {
    background: 'rgba(10, 0, 26, 0.8)',
    border: '1px solid rgba(0, 255, 238, 0.3)',
    borderRadius: '8px',
    padding: '10px',
    color: '#F0F0F0',
    backdropFilter: 'blur(10px)',
  };

  const nodeTypes = {
    primary: ({ data }: any) => (
      <motion.div
        style={{
          ...nodeStyle,
          border: '2px solid #00FFEE',
          background: 'rgba(0, 255, 238, 0.1)',
          minWidth: '200px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 255, 238, 0.5)',
            '0 0 40px rgba(0, 255, 238, 0.8)',
            '0 0 20px rgba(0, 255, 238, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {data.label}
      </motion.div>
    ),
    platform: ({ data }: any) => (
      <div
        style={{
          ...nodeStyle,
          minWidth: '150px',
          textAlign: 'center',
          fontSize: '12px',
        }}
      >
        {data.label}
      </div>
    ),
  };

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
          <h3 className="text-xl font-semibold text-text-primary">Network Graph</h3>
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
              <div style={{ width: '100%', height: '600px' }}>
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  nodeTypes={nodeTypes}
                  fitView
                  style={{
                    background: '#02000a',
                  }}
                >
                  <Background
                    color="rgba(0, 255, 238, 0.1)"
                    gap={20}
                    size={1}
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                      `,
                      backgroundSize: '50px 50px',
                    }}
                  />
                  <Controls
                    style={{
                      button: {
                        backgroundColor: 'rgba(10, 0, 26, 0.8)',
                        border: '1px solid rgba(0, 255, 238, 0.3)',
                        color: '#00FFEE',
                      },
                    }}
                  />
                </ReactFlow>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HolofoilCard>
    </motion.div>
  );
}
