

const OthersBanner = ({ img, heading }) => {
    return (
        <div>
            <div
                className="hero bg-cover bg-center h-[500px] rounded-xl overflow-hidden"
                style={{
                    backgroundImage:`url("${img}")`,
                }}>
                <div className="hero-overlay flex items-center justify-items-start pl-8 text-white">
                    <h1 className="mb-5  text-3xl font-bold">{heading}</h1>
                </div>
            </div>
        </div>
    );
};

export default OthersBanner;