'use client';

import MetricCard from './MetricCard';

interface Summary {
  sourcesScanned: number;
  dataBreaches: number;
  profilePictures: number;
}

interface MetricCardGridProps {
  summary: Summary;
}

export default function MetricCardGrid({ summary }: MetricCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <MetricCard title="Sources Scanned" value={summary.sourcesScanned} delay={0.1} />
      <MetricCard title="Data Breaches" value={summary.dataBreaches} delay={0.2} />
      <MetricCard title="Profile Pictures" value={summary.profilePictures} delay={0.3} />
    </div>
  );
}
