export default function ScreenshotsTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-pink-400">Screenshots</h2>
      <p>Visual documentation of the FLOAT System Explorer interfaces and features.</p>

      <div className="space-y-8 mt-6">
        <div>
          <h3 className="text-xl font-bold text-pink-400 mb-2">FLOAT BBS Interface</h3>
          <div className="border border-pink-500 p-2 rounded-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F389C875-854E-46F9-B91B-123A103238CF-min-V0VVotJkPcLJiixoNVsV1esSO1prYF.png"
              alt="FLOAT BBS Interface"
              className="w-full rounded"
            />
          </div>
          <p className="mt-2 text-sm">
            The main BBS interface showing the "SSO FOR JOY" header and description of "STEAMIES AS SANCTUARY" as a
            liminal space for queer expression.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-pink-400 mb-2">Ghost Trace Initialization</h3>
          <div className="border border-pink-500 p-2 rounded-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4142-x7P3rcxiRb4Qbb37apr8eVF7oMKeiX.png"
              alt="Ghost Trace Initialization"
              className="w-full rounded"
            />
          </div>
          <p className="mt-2 text-sm">
            The Ghost Trace initialization screen with the "YOU ARE THE THREAD NOW" message, representing the user's
            integration into the FLOAT system.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-pink-400 mb-2">Ghost Trace Active</h3>
          <div className="border border-pink-500 p-2 rounded-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4143-aUeloQX1mZvQAKb9BMUIiAzfqvokCY.png"
              alt="Ghost Trace Active"
              className="w-full rounded"
            />
          </div>
          <p className="mt-2 text-sm">
            The active Ghost Trace interface showing connection details, session information, and trace entries.
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-pink-500 pt-4">
        <p className="text-sm text-pink-300 italic">
          "Computational logic becomes queer theoretical praxis when containment fails..."
        </p>
      </div>
    </div>
  )
}
