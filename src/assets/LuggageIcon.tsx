import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="110"
        fill="none"
        {...props}
    >
        <path fill="#fff" d="M0 0h50v110H0z" />
        <g clipPath="url(#a)">
            <path
                fill="#8BA5D8"
                d="M17.11 58H15a5 5 0 1 0-10 0H2.89a2.5 2.5 0 0 0-2.5 2.5L0 68.833A4.172 4.172 0 0 0 4.167 73h11.666A4.172 4.172 0 0 0 20 68.833l-.39-8.333a2.5 2.5 0 0 0-2.5-2.5ZM10 54.667A3.332 3.332 0 0 1 13.333 58H6.667A3.333 3.333 0 0 1 10 54.667Zm8.333 14.166a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5l.39-8.333a.833.833 0 0 1 .834-.833H5v1.666a.834.834 0 1 0 1.667 0v-1.666h6.666v1.666a.834.834 0 1 0 1.667 0v-1.666h2.11a.833.833 0 0 1 .833.833l.39 8.333Z"
            />
        </g>
        <g fill="#8BA5D8" clipPath="url(#b)">
            <path d="M48.778 49.38a4.172 4.172 0 0 0-2.945-1.223h-1.877v-9.062A3.098 3.098 0 0 0 40.862 36h-1.724a3.098 3.098 0 0 0-3.094 3.094v9.063h-1.875A4.173 4.173 0 0 0 30 52.324V67.26a4.166 4.166 0 0 0 2.48 3.804 1.353 1.353 0 1 0 2.343.363h10.355a1.355 1.355 0 1 0 2.344-.363A4.165 4.165 0 0 0 50 67.259V52.324a4.17 4.17 0 0 0-1.222-2.945Zm-9.64-11.818h1.724a1.534 1.534 0 0 1 1.532 1.532v9.063h-4.788v-9.063a1.534 1.534 0 0 1 1.532-1.532Zm9.195 29.697a2.5 2.5 0 0 1-2.5 2.5H34.167a2.5 2.5 0 0 1-2.5-2.5V52.324a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5V67.26Z" />
            <path d="M36.825 51.907a.833.833 0 0 0-.833.834v13.717a.834.834 0 1 0 1.667 0V52.741a.834.834 0 0 0-.834-.834Zm6.35 0a.834.834 0 0 0-.833.834v13.717a.834.834 0 1 0 1.666 0V52.741a.833.833 0 0 0-.833-.834Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 53h20v20H0z" />
            </clipPath>
            <clipPath id="b">
                <path fill="#fff" d="M30 36h20v37.245H30z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(SvgComponent)
export { Memo as LuggageIcon }