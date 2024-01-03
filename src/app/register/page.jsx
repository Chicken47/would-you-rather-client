export default function Register() {
  return (
    <div className="w-screen flex items-center overflow-hidden h-screen bg-[#FFE8D6]">
      <div
        className="fixed w-full h-full "
        style={{
          backgroundImage: "url(/images/paperTexture.png)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute overflow-hidden top-0 right-0 w-[500px] h-[500px]"
        style={{
          backgroundImage: "url(/images/blurOne.png)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute overflow-hidden left-0 bottom-0 w-[500px] h-[500px]"
        style={{
          backgroundImage: "url(/images/blobTwo.png)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="w-3/5 h-full"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="z-50 flex flex-col items-center justify-center w-2/5 h-full space-y-4">
        <span>Would You Rather</span>
        <span>Sign Up</span>
        <input
          placeholder="Enter Email"
          className="w-3/5 px-5 py-2 border-black bg-[#ffffff95] rounded"
        />
        <input
          placeholder="Enter Password"
          className="w-3/5 px-5 py-2 border-black bg-[#ffffff95] rounded"
        />
        <input
          placeholder="Confirm Password"
          className="w-3/5 px-5 py-2 border-black bg-[#ffffff95] rounded"
        />
        <button className="px-3 py-2 text-white transition-all duration-500 bg-pink-800 rounded hover:bg-transparent hover:text-pink-800 hover:border hover:border-pink-800">
          Submit
        </button>
      </div>
    </div>
  );
}
