import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

const ChallengeCard = ({ id, name, author, category, difficulty, body }) => {
  const [dialogState, setDialogState] = useState(false)
  const handleDialogOpen = () => setDialogState(true)
  const handleDialogClose = () => setDialogState(false)

  const [flag, setFlag] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [alert, setAlert] = useState(null)
  const [alertState, setAlertState] = useState(false)
  const handleAlertOpen = () => setAlertState(true)
  const handleAlertClose = () => setAlertState(false)

  // const closeAll = () => {
  //   handleDialogClose()
  //   handleAlertClose()
  // }

  const dialogRef = useRef()
  useClickAway(dialogRef, handleDialogClose, ['mouseup'])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (flag.substring(0, 12) !== 'BLACKMATCHA{' && flag.substring(-1) !== '}') {
      setAlert({ status: 400, data: { message: 'Invalid Flag Format' } })
      handleAlertOpen(true)
      return
    }
    const parsedFlag = flag.substring(12, flag.length - 1)
    const data = { id: id, flag: parsedFlag }
    setIsSubmitting(true)
    fetch('/api/challenges/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        setAlert({ status: response.status, data: data })
        handleAlertOpen(true)
        setIsSubmitting(false)
        return
      })
    })
  }

  return (
    <>
      <button
        type="button"
        className="md p-4 md:w-1/2"
        style={{ maxWidth: '352px' }}
        onClick={handleDialogOpen}
      >
        <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
          <div className="p-6">
            <h2 className="mb-3 text-center text-2xl font-bold leading-8 tracking-tight">{name}</h2>
            <h3 className="mb-3 text-center text-lg leading-8 tracking-tight">
              {category} | {difficulty} | {author}
            </h3>
          </div>
        </div>
      </button>
      {/* Dialog */}
      <div className={`${dialogState ? '' : 'hidden'} fixed inset-0 z-50`}>
        <div className="fixed inset-0 -z-10 flex items-center justify-center bg-black/50 transition-opacity delay-300"></div>
        <div className="flex h-full items-center justify-center transition-opacity delay-300">
          <div
            className="relative m-8 flex max-h-[calc(100%-4rem)] max-w-xl flex-col overflow-y-auto rounded bg-white p-6 shadow-2xl transition-shadow delay-300 dark:bg-neutral-900"
            ref={dialogRef}
          >
            <span className="absolute top-0 bottom-0 right-0 px-2 py-2">
              <svg
                className="h-6 w-6 fill-current text-teal-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={handleDialogClose}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h2 className="mb-3 text-center text-2xl font-bold leading-8 tracking-tight">
                  {name}
                </h2>
                <h3 className="mb-3 text-center text-lg leading-8 tracking-tight">
                  {category} | {difficulty} | {author}
                </h3>
                <h4 className="text-md mb-3 text-center leading-8 tracking-tight">{body}</h4>
              </div>
              <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-teal-500 py-2">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="BLACKMATCHA{...}"
                    aria-label="Flag Input"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value)}
                    required
                  />
                  {!isSubmitting ? (
                    <button
                      className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
                      type="submit"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
                      type="submit"
                      disabled
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
              {alert?.status >= 400 && (
                <div
                  className={`${
                    alertState ? '' : 'hidden'
                  } relative my-px rounded-b border-t-4 border-red-500 bg-red-100 px-4 py-3 text-red-900 shadow-md`}
                  role="alert"
                >
                  <div className="flex">
                    <div className="py-1">
                      <svg
                        className="mr-4 h-6 w-6 fill-current text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Error: </p>
                      <p className="text-sm">{alert?.data.message}</p>
                    </div>
                  </div>
                  <span className="absolute top-0 bottom-0 right-0 px-2 py-2">
                    <svg
                      className="h-6 w-6 fill-current text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      onClick={handleAlertClose}
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              )}
              {alert?.status < 400 && (
                <div
                  className={`${
                    alertState ? '' : 'hidden'
                  } relative my-px rounded-b border-t-4 border-teal-500 bg-teal-100 px-4 py-3 text-teal-900 shadow-md`}
                  role="alert"
                >
                  <div className="flex">
                    <div className="py-1">
                      <svg
                        className="mr-4 h-6 w-6 fill-current text-teal-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Success: </p>
                      <p className="text-sm">{alert?.data.message}</p>
                    </div>
                  </div>
                  <span className="absolute top-0 bottom-0 right-0 px-2 py-2">
                    <svg
                      className="h-6 w-6 fill-current text-teal-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      onClick={handleAlertClose}
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChallengeCard
