export const ProductNotAvailable=function(){
    return(
        <div className="max-w-sm mx-auto mb-60 flex flex-col items-center justify-center">
            <div className="w-2/4 h-2/4">
              <img src="/client/src/assets/Search Error.png" alt="Image Description" className="object-cover w-full h-full" />
            </div>

            <div className="p-4 text-center">
              <h1 className="text-3xl font-bold title-part mb-2">OOPS, Sorry!</h1>
              <p className="text-gray-600 text-xs mt-2">
                The product you are looking for is currently unavailable or try
                to search using other keywords
              </p>
            </div>
          </div>
    )
}