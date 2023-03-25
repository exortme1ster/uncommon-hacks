import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styles from '@/styles/Login.module.css'

const supabase = createClient("https://kaxvhmuiuwbvhwprmodt.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheHZobXVpdXdidmh3cHJtb2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1MzY0ODMsImV4cCI6MTk5NTExMjQ4M30.Kgo5mH-A7vE-F1Wlqo-yjUp7uFjd-tqNmfhkbKDPvNw')

const Login = () => (
    <div className={styles.main}>
        <div className={styles.card}>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'github', 'twitter']}
                theme="dark"
            />
        </div>
    </div>
)

export default Login