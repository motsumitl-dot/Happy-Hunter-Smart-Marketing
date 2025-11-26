
import React, { useEffect, useRef } from 'react';

// Assuming Chart is available globally via CDN in index.html
declare const Chart: any;

interface AuditChartProps {
    score: number;
}

export const AuditChart: React.FC<AuditChartProps> = ({ score }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Destroy previous instance
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        // Color logic
        let color = '#EF4444'; // Red-500
        if (score > 40) color = '#F59E0B'; // Yellow-500
        if (score > 70) color = '#10B981'; // Green-500

        const remaining = 100 - score;

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Score', 'Gap'],
                datasets: [{
                    data: [score, remaining],
                    backgroundColor: [color, '#E5E7EB'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                cutout: '75%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [score]);

    return (
        <div className="relative w-40 h-40 mx-auto">
            <canvas ref={canvasRef} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-3xl font-black text-gray-800">{score}%</span>
            </div>
        </div>
    );
};
