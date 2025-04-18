interface RadialProgressProps {
    value: number; // expects a number between 0 and 100
}

function RadialProgress({ value }: RadialProgressProps) {
    const radius = 70;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-[80px] h-[80px]">
            <svg width="80" height="80" viewBox="0 0 160 160">
                {/* Background circle */}
                <circle
                    cx="80"
                    cy="80"
                    r={normalizedRadius}
                    fill="none"
                    stroke="#EEEFF3"
                    strokeWidth={stroke}
                />

                {/* Foreground progress */}
                <circle
                    cx="80"
                    cy="80"
                    r={normalizedRadius}
                    fill="none"
                    stroke="#7B6CF0"
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                />
            </svg>

            <span className="absolute text-gray-800 font-bold text-sm">
                {value}%
            </span>
        </div>
    );
}

export default RadialProgress;
