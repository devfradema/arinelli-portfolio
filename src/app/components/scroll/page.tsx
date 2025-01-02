import { CONFIG } from 'src/global-config';

import { ScrollbarView } from 'src/sections/_examples/scrollbar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Scrollbar | Components - ${CONFIG.appName}` };

export default function Page() {
  return <ScrollbarView />;
}