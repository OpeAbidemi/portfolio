const FeaturedProjects = () => {
    return (
        <div className="py-10" id="projects">
            <p className="flex items-center space-x-4 px-6 font-bold tracking-wide text-gray-600">
                <span className="text-xs">Featured Projects </span>
                <span className="border-b w-36 h-1 border-gray-600"></span>
            </p>
            <div className="px-6 font-semibold text-gray-400 py-3">
                <h3 className="text-4xl font-bold mb-10"><span className="text-primary text-opacity-70">{">_"}</span> ls projects 📁</h3>
                <div className="grid grid-cols-3 gap-6">
                    {/* <div className="col-span-full lg:col-span-1 project w-full border-2 border-primary h-80 bg-secondary">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects