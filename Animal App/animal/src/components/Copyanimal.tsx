import React from 'react'

const Copyanimal = () => {




  return (
    <>
    
    <body className="bg-gray-100 font-sans">
   
    <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-white " >Dog App</h1>
            <ul className="flex space-x-4">
                {/* <li><a href="#" className="text-white hover:underline">Home</a></li>
                <li><a href="#" className="text-white hover:underline">Breeds</a></li>
                <li><a href="#" className="text-white hover:underline">Favorites</a></li>
                <li><a href="#" className="text-white hover:underline">About</a></li> */}
            </ul>
        </div>
    </nav>

    <section className="bg-blue-100 py-16">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Your Perfect Dog</h2>
            <p className="text-gray-600 text-lg mb-8">Find information about different dog breeds and choose your ideal companion.</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">Get Started</a>
        </div>
    </section>

    <section className="py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dog Characteristics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img className="w-full h-auto" src="https://api-ninjas.com/images/dogs/golden_retriever.jpg" alt="Golden Retriever" />
                    <div className="px-6 py-4">
                        <h3 className="text-xl font-semibold text-gray-800">Golden Retriever</h3>
                        <p className="text-gray-600">A wonderful family dog known for its friendly nature and trainability.</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">#Friendly</span>
                        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">#Playful</span>
                    </div>
                </div>
            
            </div>
        </div>
    </section>

   
    <footer className="bg-blue-500 py-4">
        <div className="container mx-auto text-center text-white">
            <p>&copy; 2023 Dog App. All rights reserved.</p>
        </div>
    </footer>
</body>

    </>
  )
}

export default Copyanimal