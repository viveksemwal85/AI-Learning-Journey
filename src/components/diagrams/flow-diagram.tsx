"use client";

import { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { cn } from "@/lib/utils";

interface FlowDiagramProps {
  nodes: { id: string; label: string; type?: string }[];
  edges: { source: string; target: string; label?: string }[];
  className?: string;
}

export function FlowDiagram({ nodes, edges, className }: FlowDiagramProps) {
  const flowNodes: Node[] = useMemo(
    () =>
      nodes.map((n, i) => ({
        id: n.id,
        data: { label: n.label },
        position: { x: (i % 3) * 220, y: Math.floor(i / 3) * 120 },
        style: {
          background: n.type === "input" ? "#1e3a5f" : n.type === "output" ? "#1a3a2a" : "#1e1e2e",
          color: "#e2e8f0",
          border: `1px solid ${n.type === "input" ? "#3b82f6" : n.type === "output" ? "#22c55e" : "#6366f1"}`,
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "13px",
          fontWeight: 500,
          minWidth: "140px",
          textAlign: "center" as const,
        },
      })),
    [nodes]
  );

  const flowEdges: Edge[] = useMemo(
    () =>
      edges.map((e, i) => ({
        id: `e-${i}`,
        source: e.source,
        target: e.target,
        label: e.label,
        animated: true,
        style: { stroke: "#6366f1" },
        labelStyle: { fill: "#94a3b8", fontSize: 11 },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
      })),
    [edges]
  );

  const onInit = useCallback(() => {}, []);

  return (
    <div className={cn("h-[400px] w-full rounded-xl border border-border/50 bg-card/20", className)}>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onInit={onInit}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable
        nodesConnectable={false}
      >
        <Background color="#334155" gap={20} size={1} />
        <Controls className="!bg-card !border-border !shadow-lg [&>button]:!bg-card [&>button]:!border-border [&>button]:!text-foreground" />
        <MiniMap
          nodeColor="#6366f1"
          maskColor="rgba(0,0,0,0.6)"
          className="!bg-card/80 !border-border"
        />
      </ReactFlow>
    </div>
  );
}
