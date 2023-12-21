// The component accepts a className prop which allows you to customize  styling when
//  using it on different pages/components
export default function HorizontalRule({ className = "" }) {
    return (
        <div className={`w-full hr-gradient my-4 ${className}`}></div>
    );
}
