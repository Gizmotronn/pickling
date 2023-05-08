import type { AppProps } from 'next/app';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

import { useState } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';

import '@/styles/globals.css';

// const supabase = createClient<Database>(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SECRET_KEY
// )

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const allOnlineUsers = await supabase.from('users').select('*').eq('status', 'ONLINE')
//   res.status(200).json(allOnlineUsers)
// }

export default function Pickle ({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session,
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
