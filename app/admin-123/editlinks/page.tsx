"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LinkData } from "@prisma/client";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const ERROR_MESSAGE: string = 'Ein Fehler ist aufgetreten';

const ManageLinks = () => {
    const [links, setLink] = useState<LinkData[]>([]);

    const [file, setFile] = useState<File | null>(null);

    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        // Abrufen der Linkdaten vom Server
        const fetchLinks = async () => {
            try {
                const response = await fetch("/api/link");
                const data = await response.json();
                setLink(data);
            } catch (error) {
                console.error("Error fetching link:", error);
            }
        };
        fetchLinks();
    }, []);

    const handlePDFUpload = async () => {
        if (file == null) {
            setError("Es wurde keine Datei ausgewählt!");
            return null;
        }

        const formData = new FormData();
        formData.append("file", file!);

        try {
            const response = await fetch("/api/s3-upload", {
                method: "POST",
                body: formData,
            });

            const result: string = await response.json();
            return result
        } catch (error) {
            setError("Fehler beim Hochladen des Bildes.");
            console.log(error)
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const fileUrl = await handlePDFUpload();
        if (!fileUrl) {
            setError("Fehler beim Hochladen der Datei.");
            setLoading(false);
            return;
        }

        const linkUpdateBody = {
            id,
            document: fileUrl, // Verwende fileUrl direkt
        };

        try {
            const response = await fetch(`/api/link/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(linkUpdateBody),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError("Fehler beim Aktualisieren: ");
                console.log(JSON.stringify(errorData));
            }

            setSuccess("Link akzeptiert!")
        } catch (error) {
            setError(ERROR_MESSAGE)
            console.log(error);
        } finally {
            setLoading(false);
            location.reload();
        }
    }

    //nur für das Dropdownmenü wichtig
    const [position, setPosition] = React.useState("bottom");

    return (
        <div className="flex flex-col items-end lg:items-center mr-5 mb-12 py-11 z-0">
            <NavbarAdmin />
            <div className="flex flex-col items-center">
                <h1 className="font-bold md:text-6xl tracking-tight text-3xl">
                    Verwaltung aller Links
                </h1>

                <p className="mt-3 mb-10 ">
                    Hier Können alle Links, die für Nutzer sichbar sind, bearbeitet werden
                </p>

                <div className="w-full min-h-screen">
                    {links.map((link) => (
                        <div key={link.id} className="w-full  place-self-end">
                            <Card className="p-5 mt-6 shadow-md">
                                <CardContent className=" pb-0 flex flex-row justify-between">
                                    {link.name}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline">Bearbeiten</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="max-w-xl bg-slate-50 mt-1 py-1 px-2 rounded-md ">
                                            <DropdownMenuLabel className="border-b-2">
                                                Neuer Link:
                                            </DropdownMenuLabel>
                                            <DropdownMenuRadioGroup
                                                value={position}
                                                onValueChange={setPosition}
                                            >
                                                <form
                                                    onSubmit={handleSubmit}
                                                    className="flex flex-col justify-start items-start gap-5 mt-2"
                                                >
                                                    <input
                                                        type="file"
                                                        onFocus={() => setId(link.id)}
                                                        onChange={(e) => {
                                                            if (e.target.files && e.target.files.length > 0) {
                                                                setFile(e.target.files[0]);
                                                            }
                                                        }}
                                                        required
                                                        className="w-full px-4 py-1 text-sm rounded-md shadow-sm"
                                                    />

                                                    <Button
                                                        onClick={() => setId(link.id)}
                                                        type="submit"
                                                        disabled={loading}
                                                        className="bg-orange-500 items-cent hover:bg-orange-600 hover:scale-105 transition duration-200 shadow-md w-full"
                                                    >
                                                        <span className="font-bold text-white shadow-sm">
                                                            {loading ? "Speichern..." : "Änderungen speichern"}
                                                        </span>
                                                    </Button>
                                                    <div className="text-md font-semibold flex justify-center">
                                                        {error && <p style={{ color: "red" }}>{error}</p>}
                                                        {success && <p style={{ color: "green" }}>{success}</p>}
                                                    </div>
                                                </form>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageLinks;
