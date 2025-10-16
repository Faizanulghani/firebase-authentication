const page = () => {
  return (
    <main className="felx flex-col">
        <div className="p-10 flex justify-center w-full">
            <button className="px-3 py-2 flex gap-2 items-center bg-black text-white rounded-full">
                <img className="h-6" src="/google.png" alt="" />
                <h1>Sign In With Google</h1>
            </button>
        </div>
    </main>
  )
}

export default page