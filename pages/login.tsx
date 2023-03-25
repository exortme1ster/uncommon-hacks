import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import styles from "@/styles/Login.module.css";

import { supabase } from "@/functionality/supabase";

const Login = () => (
  <div className={styles.main}>
    <div className={styles.card}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "github", "twitter"]}
        theme="dark"
      />
    </div>
  </div>
);

export default Login;
