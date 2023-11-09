import React from 'react'

export const SVGAvatarProfilePhoto = (
    {
        height = '192',
        width = '192',
        className
    }: {height?: string, width?: string, className?: string}
) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_5263_235619)">
                <rect x="16" y="4" width="160" height="160" rx="80" fill="#EEF4FF"/>
                <path d="M122.667 114V107.333C122.667 103.797 121.263 100.406 118.762 97.9052C116.262 95.4048 112.87 94 109.334 94H82.6673C79.1311 94 75.7397 95.4048 73.2392 97.9052C70.7387 100.406 69.334 103.797 69.334 107.333V114M109.334 67.3333C109.334 74.6971 103.364 80.6667 96.0006 80.6667C88.6369 80.6667 82.6673 74.6971 82.6673 67.3333C82.6673 59.9695 88.6369 54 96.0006 54C103.364 54 109.334 59.9695 109.334 67.3333Z" stroke="#444CE7" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="14" y="2" width="164" height="164" rx="82" stroke="white" strokeWidth="4"/>
            </g>
            <defs>
                <filter id="filter0_dd_5263_235619" x="0" y="0" width="192" height="192" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5263_235619"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5263_235619"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect2_dropShadow_5263_235619"/>
                    <feOffset dy="12"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_5263_235619" result="effect2_dropShadow_5263_235619"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5263_235619" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}