const sizes = {
  'large': '56',
  'middle': '42'
};

interface ArrowIconProps {
  size: keyof typeof sizes;
}


export function ArrowIcon ({ size='middle' }: ArrowIconProps) {
  const targetSize = sizes[size];

  return (
    <svg
      width={targetSize}
      height={targetSize}
      viewBox={`0 0 ${targetSize} ${targetSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1991 29.5324L16.1991 26.7356L35.8149 26.7356L26.6808 17.6015L28.6585 15.6239L39.2059 26.1714L39.2061 26.1712L39.7704 26.7356H39.8009V26.7661L41.1837 28.1488L39.8009 29.5316L39.8009 29.5324L39.8001 29.5324L28.6587 40.6738L26.6811 38.6962L35.8449 29.5324L16.1991 29.5324Z"
        fill="#A4FFFF"
      />
    </svg>
  );
}
