

export function ThreeLayer() {
  return (
      <div className="container my-8 flex justify-center rounded-3xl p-6">
        <div className="flex justify-center ml-4 flex-auto pl-20">
          <div className="box relative bg-violet-600 h-64 w-64 flex flex-col text-center p-2 text-white">
            <span className="title text-black">Background(SeqDiagram)</span>
            <div className="relative flex-grow">
              <div className="lifeline-layer h-full w-full flex justify-center absolute bg-green-700">
                <div className="content">LifelineLayer</div>
              </div>
              <div className="message-layer h-full w-full flex justify-center absolute bg-sky-700">
                <div className="content">MessageLayer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
