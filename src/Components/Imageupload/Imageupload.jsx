function Imageupload(){
    return (
        <>
            <div className="w-screen min-h-[calc(100vh - 70px)] flex items-center justify-center bg-gray-100">
                <div className="w-96 p-6 bg-white rounded-lg shadow-md">
                    <form action="" className="text-center">
                        <label
                            htmlFor="file-upload"
                            className="block w-full p-6 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-300"
                        >
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={(e) => console.log(e.target.files[0])}
                            />
                            <span className="text-gray-500">
                                Drag and drop files here or click to upload
                            </span>
                        </label>
                        <p className="text-sm text-gray-400 mt-2">Accepted file types: .jpg, .png, .pdf</p>
                        <button
                            type="submit"
                            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Upload
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Imageupload