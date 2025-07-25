export default function Loading({ disabled }: { disabled: boolean }) {
  return (
    <div className={`${disabled ? 'opacity-0 *:h-0 **:stroke-0' : 'opacity-100 *:h-1/16'} transition-all duration-500 ease **:transition-all **:duration-500 **:ease bg-background fixed z-50 h-full w-full flex flex-col items-center justify-center`}>
      <svg className='svg-animate-alt **:stroke-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.78 288.02">
        <g>
          <path d="M118.46,165.21c18.18,85.02,65.87,115.84,65.87,115.84,9.86-121.17-24.06-193.92-24.06-193.92l-.89-40.03C138.6-17.05,69.2,3.94,63.31,39.99c-19.99,2.36-57.52,18.38-57.52,18.38,0,0,72.04-5.12,82.39,25.85-62.96,86.74-66.99,145.48,9.77,197.67M48.49,282.23l151.51-.29" />
        </g>
      </svg>
      <svg className="**:fill-foreground w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.39 11.71">
        <g>
          <g>
            <path d="M0,9.25V1.74h1.15v6.64h4.04v.86H0Z" />
            <path d="M7.19,8.5c-.53-.6-.79-1.42-.79-2.44s.26-1.85.8-2.43c.54-.59,1.27-.89,2.19-.89,1.86,0,3,1.25,3,3.31s-1.13,3.33-3.05,3.33c-.9,0-1.62-.3-2.16-.89ZM11.17,6.06c0-1.52-.66-2.45-1.78-2.45s-1.76.92-1.76,2.46.65,2.46,1.74,2.46c1.15,0,1.8-.9,1.8-2.47Z" />
            <path d="M15.81,9.36c-.58,0-1.06-.17-1.44-.49-.37-.34-.56-.76-.56-1.26,0-.66.29-1.2.88-1.59.59-.4,1.37-.6,2.33-.6h.72v-.55c0-.88-.37-1.25-1.28-1.25-.67,0-1.37.19-2.09.56v-.98c.83-.3,1.6-.44,2.33-.44,1.6,0,2.19.59,2.19,2.13v2.66c0,.77.14,1,.59,1,.07,0,.19-.02.36-.06l.11.7c-.38.12-.68.18-.89.18-.56,0-.94-.29-1.14-.88-.71.59-1.4.88-2.1.88ZM17.73,6.13h-.35c-1.58,0-2.38.43-2.38,1.28,0,.61.44,1.02,1.12,1.02.5,0,1.04-.23,1.61-.7v-1.61Z" />
            <path d="M25.32,9.25v-1.2c-.56.9-1.26,1.34-2.09,1.34-1.44,0-2.33-1.19-2.33-3.12,0-1.04.24-1.89.73-2.54.49-.66,1.14-.98,1.94-.98.68,0,1.26.29,1.74.86V0h1.15v9.25h-1.15ZM25.32,4.49c-.54-.59-1.07-.88-1.58-.88-1.01,0-1.6.94-1.6,2.55,0,1.5.44,2.24,1.33,2.24.66,0,1.27-.41,1.85-1.22v-2.7Z" />
            <path d="M30.81,9.25V3.75h-2.31v-.86h3.48v6.36h-1.16ZM30.67,1.45V0h1.45v1.45h-1.45Z" />
            <path d="M35.8,9.25V2.89h1.15v1.29c.68-1.07,1.25-1.44,2.17-1.44,1.21,0,1.81.72,1.81,2.15v4.35h-1.16v-4.11c0-1.01-.28-1.38-1.01-1.38-.68,0-1.28.46-1.81,1.38v4.11h-1.15Z" />
            <path d="M43.3,10.4c.68.3,1.33.44,1.93.44,1.24,0,1.85-.59,1.85-1.76l.05-1.15c-.48.88-1.18,1.32-2.1,1.32-1.45,0-2.37-1.19-2.37-3.06,0-1.02.25-1.85.74-2.48s1.14-.96,1.93-.96c.62,0,1.23.29,1.83.86v-.72h1.08v5.08c0,.83-.06,1.44-.17,1.86s-.31.78-.61,1.1c-.48.52-1.22.77-2.24.77-.61,0-1.28-.11-2.04-.34l.12-.97ZM47.09,4.5c-.52-.59-1.06-.89-1.61-.89-1.01,0-1.6.92-1.6,2.49,0,1.34.52,2.13,1.39,2.13.68,0,1.3-.42,1.81-1.25v-2.49Z" />
            <path d="M59.18,9.25v-1.74h1.74v1.74h-1.74Z" />
            <path d="M66.42,9.25v-1.74h1.74v1.74h-1.74Z" />
            <path d="M73.65,9.25v-1.74h1.74v1.74h-1.74Z" />
          </g>
        </g>
      </svg>
    </div>
  )
}