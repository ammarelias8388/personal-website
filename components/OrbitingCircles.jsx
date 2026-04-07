const OrbitingCircles = () => {
  const items = [
    "Modern Frontend",
    "Pixel Perfect UI",
    "Performance First",
    "Scalable Architecture",
    "User Centric Design",
    "Clean Code",
    "Responsive Systems",
    "Maintainable Components",
  ];

  const radius = 150;

  return (
    <div style={{ position: "relative", width: "400px", height: "400px" }}>

      {/* الحلقة */}
      <div style={{
        position: "absolute",
        top: "50px", left: "50px",
        width: "300px", height: "300px",
        borderRadius: "50%",
        border: "1px solid rgba(5, 156, 249, 0.74)",
      }} />

      {/* المركز */}
      <div style={{
        position: "absolute",
        top: "155px", left: "155px",
        width: "90px", height: "90px",
        borderRadius: "50%",
        background: "black",
        border: "1.5px solid #37a9f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontWeight: "700",
        fontSize: "13px",
        fontFamily: "monospace",
        boxShadow: "0 0 20px rgb(9, 177, 248)",
        zIndex: 20,
      }}>
        {"<ELIAS/>"}
      </div>

      <svg style={{
        position: "absolute", top: 0, left: 0,
        width: "400px", height: "400px",
        overflow: "visible",
      }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {items.map((text, i) => {
          const angle = (360 / items.length) * i;
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + radius * Math.cos(rad);
          const cy = 200 + radius * Math.sin(rad);
          const words = text.split(" ");

          return (
            <g key={i}>
              {/* الدائرة - بتدور حول المركز */}
              <circle cx={cx} cy={cy} r={40}
                fill="black" stroke="#29a8f7" strokeWidth="1.5"
                filter="url(#glow)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 200 200`}
                  to={`360 200 200`}
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* النص - بيدور مع الدائرة بس بعدين بيرجع بالعكس */}
              <text textAnchor="middle" fill="#ffffff"
                fontSize="11" fontFamily="Arial"
              >
                {words.map((word, wi) => (
                  <tspan
                    key={wi}
                    x={cx}
                    dy={wi === 0 ? cy - ((words.length - 1) * 7) - 4 : 14}
                  >
                    {word}
                  </tspan>
                ))}
                {/* دوران الدائرة */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 200 200`}
                  to={`360 200 200`}
                  dur="20s"
                  repeatCount="indefinite"
                  additive="sum"
                />
                {/* counter-rotation لتثبيت النص */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${cx} ${cy}`}
                  to={`-360 ${cx} ${cy}`}
                  dur="20s"
                  repeatCount="indefinite"
                  additive="sum"
                />
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default OrbitingCircles;