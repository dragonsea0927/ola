import React from 'react'
import toast from 'react-hot-toast';
import Image from 'next/image'


type Props = {
  message: string,
}

type Severity = 'success' | 'error' | 'info' | 'warning'

export const successToast = (msg: string) => toast.success(msg)
export const errorToast = (msg: string) => toast.error(msg)
export const tailwindToast = (severity: Severity, message: string, photo?: string, name?: string) => toast.custom((t) => (
  <div
    className={`${t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-[var(--contactBg)] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        {photo && (
          <div className="flex-shrink-0 pt-0.5">
            <Image
              className="h-10 w-10 rounded-full"
              src={photo}
              alt=""
              width={40}
              height={40}
            />
          </div>
        )}
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-[var(--textColor)]">
            {name && (
              <span className="text-[var(--textColor)]">
                {name}
              </span>
            )}
          </p>
          <p className={`${severity === 'success' ? 'text-green-400' : severity === 'error' ? 'text-red-400' : 'mt-1 text-sm text-[var(--textColor)]'}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
))