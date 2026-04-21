'use client'
import { useToast } from '@/src/context/ToastContext'
import styles from './Toast.module.css'

const typeClass = {
  error: 'is-error',
  success: 'is-success',
  warning: 'is-warning',
}

const Toast = () => {
  const { toasts } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className={styles.container}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`nes-container ${typeClass[toast.type] ?? 'is-error'} ${styles.toast}`}
        >
          <p className={styles.message}>{toast.message}</p>
        </div>
      ))}
    </div>
  )
}

export default Toast
