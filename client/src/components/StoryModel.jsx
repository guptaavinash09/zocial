import { ArrowLeft, Sparkle, TextIcon, Upload } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

function StoryModel({ setShowModal }) {
  const bgColors = [
    "#4f46e5",
    "#22c55e",
    "#ef4444",
    "#f59e0b",
    "#3b82f6",
    "#a855f7",
    "#ec4899",
    "#f97316",
    "#14b8a6",
    "gray"
  ];
  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState(bgColors[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleMediaUpload = (e) => {
  const file = e.target?.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setMedia(file);            // ✅ store the file
    setPreviewUrl(url);        // store preview URL
    console.log("url : ", url);
  }
};

const handleCreateStory = async()=>{}


  return (
    <div className="fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md ">
        <div className="text-center mb-4 flex items-center justify-between">
          <button
            onClick={() => setShowModal(false)}
            className="text-white p-2 cursor-pointer"
          >
            <ArrowLeft />
          </button>
          <h2 className="text-lg font-semibold">Create Story</h2>
          <span className="w-10"></span>
        </div>
        <div className='rounded-lg h-96 flex items-center justify-center relative' style={{backgroundColor: background}}>

                {mode === 'text' && (
                    <textarea className='bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none' placeholder="What's on your mind?" onChange={(e)=>setText(e.target.value)} value={text}/>
                )}
                {
                    mode === 'media' && previewUrl && (
                        media?.type.startsWith('image') ? (
                            <img src={previewUrl} alt="" className='object-contain max-h-full'/>
                        ) : (
                            <video src={previewUrl} className='object-contain max-h-full'/>
                        )
                    )
                }

            </div>

            {/* this div for bg color changer */}
            <div className="w-full flex gap-x-2 mt-2 mx-auto justify-center">

                {
                    bgColors.map((color, index)=>(<div className="flex size-8 rounded-full cursor-pointer" style={{backgroundColor:color}} onClick={()=>setBackground(color)} key={index}>
                        
                    </div>))
                }

            </div>

            <div className='flex gap-2 mt-4'>
                <button onClick={()=> {setMode('text'); setMedia(null); setPreviewUrl(null)}} className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'text' ? "bg-white text-black" : "bg-zinc-800"}`}>
                    <TextIcon size={18}/> Text
                </button>
                <label className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'media' ? "bg-white text-black" : "bg-zinc-800"}`}>
                    <input onChange={(e)=>{handleMediaUpload(e); setMode('media')}} type="file" accept='image/*, video/*' className='hidden'/>
                    <Upload size={18}/> Photo/Video
                </label>
            </div>
            
            <button onClick={()=> toast.promise(handleCreateStory(),{
                loading: 'Saving...',
                success: <p>Story Added</p>,
                error: (e)=> <p>{e.message}</p>
                
            })} className='flex items-center justify-center gap-2 text-white py-3 mt-4 w-full rounded bg-gradient-to-r from-[#2a9b8c] via-[#6457c7] to-[#ed537c] active:scale-95 transition cursor-pointer'>
                <Sparkle size={18}/> Create Story
            </button>

      </div>
    </div>
  );
}

export default StoryModel;
