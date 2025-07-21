import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@/lib/session";
import UpdateForm from "./update-form";

export default function UpdateDialog({ user }: { user: User }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    update profile
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>update your information</DialogTitle>
                </DialogHeader>
                <UpdateForm user={user} />
            </DialogContent>
        </Dialog>
    )
}