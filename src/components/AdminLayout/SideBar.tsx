import { BookUser, BookX, CalendarCheck, LineChart, Users } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage, Button, Label } from "../ui";
import { Separator } from "../ui/Separator";
import Image from "next/image";
import { isAdmin } from "@/utils/auth";
// import { api } from '@/api';

export interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SideBar = ({ className, ...props }: SideBarProps) => {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAdminLink, setShowAdminLink] = useState(false);

  useEffect(() => {
    setShowAdminLink(isAdmin()); 
  }, []);
  return (
    <aside
      className={`min-h-screen max-h-screen mt-16 flex flex-col justify-between shadow-md border-r bg-emerald-100 ${
        isSidebarOpen ? "w-auto " : "w-auto "
      } `}
    >
      <div className="py-4">
        <ul
          className={`space-y-3 ${
            !isSidebarOpen ? "flex flex-col items-center" : "ml-2 mr-2"
          }`}
        >
          <li className={`${isSidebarOpen ? "flex justify-end" : ""}`}>
            <button
              onClick={() =>
                isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
              }
              className={`flex hover:bg-none items-center rounded-xl font-bold text-sm mb-2 px-2 justify-start w-full`}
            >
              {isSidebarOpen ? (
                <div className="flex items-center">
                  <Image
                    src="/dash.png"
                    alt="natilait logo"
                    width={65}
                    height={65}
                  />
                  <div className="flex flex-col items-start mt-1">
                    <Label className="font-bold text-purple-800">
                      tarak.Jbelia
                    </Label>
                    <Label className="text-xs text-purple-800">
                      tarak.jbeia@example.com
                    </Label>
                  </div>
                </div>
              ) : (
                <Avatar>
                  <AvatarImage src="" alt="User Avatar" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              )}
            </button>
          </li>
          <li>
            <Button
              onClick={() => router.push("/dashboard")}
              variant={"ghost"}
              className={`flex items-center justify-start ${
                router.pathname === "/" ? "bg-green-400" : ""
              } hover:bg-green-400 rounded-xl font-bold text-sm  py-3 px-4 w-full`}
            >
              {isSidebarOpen ? (
                <>
                  <LineChart className="mr-2" />
                  <Label className="font-bold text-purple-800">
                    Dashboread
                  </Label>
                </>
              ) : (
                <LineChart />
              )}
            </Button>
          </li>
          <Separator className="mt-4 mb-2" />
          <li>
            <Button
              onClick={() => router.push("/workersList")}
              variant={"ghost"}
              className={`flex items-center justify-start ${
                router.pathname === "/workersList" ? "bg-green-400" : ""
              } hover:bg-green-400 rounded-xl font-bold text-sm  py-3 px-4 w-full`}
            >
              {isSidebarOpen ? (
                <>
                  <Users className="mr-2" />
                  <Label className="font-bold text-purple-800">
                    Liste des employés
                  </Label>
                </>
              ) : (
                <Users />
              )}
            </Button>
          </li>
          <li>
            <Button
              onClick={() => router.push("/checkInSpace")}
              variant={"ghost"}
              className={`flex items-center justify-start ${
                router.pathname === "/checkInSpace" ? "bg-green-400" : ""
              } hover:bg-green-400 rounded-xl font-bold text-sm  py-3 px-4 w-full`}
            >
              {isSidebarOpen ? (
                <>
                  <CalendarCheck className="mr-2" />
                  <Label className="font-bold text-purple-800">
                    Espace pointage
                  </Label>
                </>
              ) : (
                <CalendarCheck />
              )}
            </Button>
          </li>
          <li>
            <Button
              onClick={() => router.push("/leaveSpace")}
              variant={"ghost"}
              className={`flex items-center justify-start ${
                router.pathname === "/leaveSpace" ? "bg-green-400" : ""
              } hover:bg-green-400 rounded-xl font-bold text-sm  py-3 px-4 w-full`}
            >
              {isSidebarOpen ? (
                <>
                  <BookUser className="mr-2" />
                  <Label className="font-bold text-purple-800">
                    Espace congés
                  </Label>
                </>
              ) : (
                <BookUser />
              )}
            </Button>
          </li>
          <li>
            <Button
              onClick={() => router.push("/absentSpace")}
              variant={"ghost"}
              className={`flex items-center justify-start ${
                router.pathname === "/absentSpace" ? "bg-green-400" : ""
              } hover:bg-green-400 rounded-xl font-bold text-sm  py-3 px-4 w-full`}
            >
              {isSidebarOpen ? (
                <>
                  <BookX className="mr-2" />
                  <Label className="font-bold text-purple-800">
                    Espace absentéismes
                  </Label>
                </>
              ) : (
                <BookX />
              )}
            </Button>
          </li>
          {showAdminLink && (
            <li>
              <Button
                onClick={() => router.push("/historique")}
                variant={"ghost"}
                className={`flex items-center justify-start ${
                  router.pathname === "/historique" ? "bg-green-400" : ""
                } hover:bg-green-400 rounded-xl font-bold text-sm py-3 px-4 w-full`}
              >
                historique{" "}
              </Button>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};
