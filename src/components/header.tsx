import Link from "next/link";
import { Button } from "./ui/button";
import AuthNavigation from "./auth/nav";
import RegionSelection from "./region-selection";
import { Medal, Swords } from "lucide-react";

export default function Header() {
  return (
    <header className="min-h-14 flex items-center justify-between gap-4 max-w-7xl mx-auto px-4 sticky top-0 left-0 right-0">
      <Button asChild variant="ghost">
        <Link href="/">
          mud/ladder
        </Link>
      </Button>
      <div className="flex items-center gap-4">
        <Button asChild variant="link">
          <Link href="/rankings">
            <Medal />
            rankings
          </Link>
        </Button>
        <Button asChild>
          <Link href="/find-match">
            <Swords />
            find match
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <RegionSelection />
        <AuthNavigation />
      </div>
    </header>
  )
}
