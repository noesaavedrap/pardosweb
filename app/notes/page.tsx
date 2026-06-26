import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from('notes').select();

  return (
    <div className="min-h-screen bg-[#080808] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <pre className="bg-[#111] p-4 rounded-xl border border-white/10">
        {JSON.stringify(notes, null, 2)}
      </pre>
    </div>
  );
}
