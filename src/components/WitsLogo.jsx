import React from 'react';

/**
 * Accurate Wits University crest SVG component.
 * Transparent background — no image asset needed.
 * Props:
 *   size  – controls width in px (height scales proportionally)
 */
const WitsLogo = ({ size = 100 }) => {
    const w = size;
    const h = size * 1.55;

    return (
        <svg
            width={w}
            height={h}
            viewBox="0 0 200 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="University of the Witwatersrand crest"
        >
            <defs>
                {/* Shield clip path */}
                <clipPath id="shieldClip">
                    <path d="M100 185 Q45 175 30 130 L30 80 L170 80 L170 130 Q155 175 100 185Z" />
                </clipPath>
                {/* Gold gradient */}
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4A843" />
                    <stop offset="100%" stopColor="#B8902A" />
                </linearGradient>
                {/* Navy gradient */}
                <linearGradient id="navyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A3A8A" />
                    <stop offset="100%" stopColor="#0F2560" />
                </linearGradient>
            </defs>

            {/* ══════════════════════════════════════
                KUDU HEAD (above shield)
            ══════════════════════════════════════ */}

            {/* Neck */}
            <path d="M88 90 Q85 75 83 65 Q90 62 100 62 Q110 62 117 65 Q115 75 112 90Z"
                fill="#7A5C42" />

            {/* Neck stripe */}
            <path d="M90 88 Q93 78 100 76 Q107 78 110 88"
                stroke="#5A3E2A" strokeWidth="1" fill="none" />

            {/* Head base */}
            <ellipse cx="100" cy="56" rx="18" ry="20" fill="#8B6647" />

            {/* Face lighter area */}
            <path d="M92 50 Q100 44 108 50 Q108 62 100 65 Q92 62 92 50Z"
                fill="#9A7055" />

            {/* White nose chevron */}
            <path d="M96 57 L100 52 L104 57 L100 60Z" fill="#E8D5B5" />

            {/* Eyes */}
            <ellipse cx="92" cy="50" rx="3.5" ry="3" fill="#2C1A0A" />
            <ellipse cx="108" cy="50" rx="3.5" ry="3" fill="#2C1A0A" />
            <circle cx="91" cy="49" r="1" fill="#fff" opacity="0.5" />
            <circle cx="107" cy="49" r="1" fill="#fff" opacity="0.5" />

            {/* Ears */}
            <ellipse cx="82" cy="47" rx="5" ry="8" fill="#8B6647" transform="rotate(-20 82 47)" />
            <ellipse cx="82" cy="47" rx="3" ry="5" fill="#C4967A" transform="rotate(-20 82 47)" />
            <ellipse cx="118" cy="47" rx="5" ry="8" fill="#8B6647" transform="rotate(20 118 47)" />
            <ellipse cx="118" cy="47" rx="3" ry="5" fill="#C4967A" transform="rotate(20 118 47)" />

            {/* Nose / muzzle */}
            <ellipse cx="100" cy="63" rx="7" ry="5" fill="#7A5038" />
            <ellipse cx="100" cy="63" rx="4" ry="3" fill="#4A2A18" />

            {/* Left horn — spirals upward */}
            <path d="M88 43 Q72 30 78 10 Q82 0 90 4 Q85 12 86 20 Q90 28 88 38"
                stroke="#5C3A1A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M88 43 Q72 30 78 10 Q82 0 90 4 Q85 12 86 20 Q90 28 88 38"
                stroke="#8B6033" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Right horn */}
            <path d="M112 43 Q128 30 122 10 Q118 0 110 4 Q115 12 114 20 Q110 28 112 38"
                stroke="#5C3A1A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M112 43 Q128 30 122 10 Q118 0 110 4 Q115 12 114 20 Q110 28 112 38"
                stroke="#8B6033" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Torse (twisted blue/silver band between kudu and shield) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <rect
                    key={i}
                    x={34 + i * 15}
                    y={78}
                    width={14}
                    height={8}
                    rx={3}
                    fill={i % 2 === 0 ? '#1A3A8A' : '#C0C8D8'}
                />
            ))}

            {/* ══════════════════════════════════════
                SHIELD
            ══════════════════════════════════════ */}

            {/* Shield silver border */}
            <path d="M28 82 L172 82 L172 132 Q156 180 100 198 Q44 180 28 132 Z"
                fill="#B0B8C8" />

            {/* Gold upper half */}
            <path d="M32 86 L168 86 L168 128 L32 128 Z" fill="url(#goldGrad)" />

            {/* Navy lower half */}
            <path d="M32 128 L168 128 L168 132 Q154 176 100 193 Q46 176 32 132 Z"
                fill="url(#navyGrad)" />

            {/* ── Cogwheel (behind book) ── */}
            {/* Outer teeth */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <rect
                    key={i}
                    x={96} y={91}
                    width={8} height={6}
                    rx={1}
                    fill="#1A1A1A"
                    transform={`rotate(${angle} 100 107)`}
                />
            ))}
            {/* Gear body */}
            <circle cx="100" cy="107" r="17" fill="#1A1A1A" />
            <circle cx="100" cy="107" r="13" fill="url(#goldGrad)" />
            <circle cx="100" cy="107" r="4" fill="#1A1A1A" />

            {/* ── Open Book (on top of gear) ── */}
            {/* Book base shadow */}
            <rect x="74" y="98" width="52" height="26" rx="2" fill="#222" opacity="0.2" />
            {/* Left page */}
            <path d="M76 100 Q88 97 100 100 L100 124 Q88 121 76 124 Z"
                fill="#F0EEE8" stroke="#999" strokeWidth="0.8" />
            {/* Right page */}
            <path d="M100 100 Q112 97 124 100 L124 124 Q112 121 100 124 Z"
                fill="#F8F6F0" stroke="#999" strokeWidth="0.8" />
            {/* Spine */}
            <rect x="98.5" y="99" width="3" height="26" rx="1" fill="#888" />
            {/* Page lines left */}
            <line x1="80" y1="106" x2="97" y2="104" stroke="#aaa" strokeWidth="0.8" />
            <line x1="80" y1="110" x2="97" y2="108" stroke="#aaa" strokeWidth="0.8" />
            <line x1="80" y1="114" x2="97" y2="112" stroke="#aaa" strokeWidth="0.8" />
            <line x1="80" y1="118" x2="97" y2="116" stroke="#aaa" strokeWidth="0.8" />
            {/* Page lines right */}
            <line x1="103" y1="104" x2="120" y2="106" stroke="#aaa" strokeWidth="0.8" />
            <line x1="103" y1="108" x2="120" y2="110" stroke="#aaa" strokeWidth="0.8" />
            <line x1="103" y1="112" x2="120" y2="114" stroke="#aaa" strokeWidth="0.8" />
            <line x1="103" y1="116" x2="120" y2="118" stroke="#aaa" strokeWidth="0.8" />

            {/* ── Wavy lines in navy section ── */}
            {/* Wave 1 */}
            <path d="M38 142 Q52 135 66 142 Q80 149 94 142 Q108 135 122 142 Q136 149 150 142 Q158 138 162 136"
                stroke="#9AAAC8" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Wave 2 */}
            <path d="M36 154 Q50 147 64 154 Q78 161 92 154 Q106 147 120 154 Q134 161 148 154 Q156 150 162 148"
                stroke="#9AAAC8" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Wave 3 */}
            <path d="M38 166 Q52 159 66 166 Q80 173 94 166 Q108 159 122 166 Q136 173 148 166 Q156 162 162 160"
                stroke="#9AAAC8" strokeWidth="5" fill="none" strokeLinecap="round" />

            {/* ══════════════════════════════════════
                MOTTO RIBBON
            ══════════════════════════════════════ */}

            {/* Ribbon body */}
            <path d="M25 220 Q40 205 60 210 L100 215 L140 210 Q160 205 175 220 Q165 232 150 228 L100 233 L50 228 Q35 232 25 220Z"
                fill="#1A3A8A" />
            {/* Left ribbon tail */}
            <path d="M25 220 Q15 215 18 228 Q22 235 35 230 Q28 228 25 220Z"
                fill="#0F2560" />
            {/* Right ribbon tail */}
            <path d="M175 220 Q185 215 182 228 Q178 235 165 230 Q172 228 175 220Z"
                fill="#0F2560" />

            {/* Ribbon highlight */}
            <path d="M40 211 Q70 207 100 210 Q130 207 160 211"
                stroke="#2A5AC8" strokeWidth="1.5" fill="none" opacity="0.5" />

            {/* Motto text */}
            <text x="100" y="225" textAnchor="middle"
                fontSize="10" fontFamily="Georgia, 'Times New Roman', serif"
                fontStyle="italic" letterSpacing="1.5"
                fill="#FFFFFF" fontWeight="600">
                SCIENTIA ET LABORE
            </text>
        </svg>
    );
};

export default WitsLogo;
