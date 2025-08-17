"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const FormularKontakt = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async (data: FormValues) => {
        const response = await fetch("api/emails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            setError(true)
            return;
        }

        setSuccess(true)
        reset();
    }

    return (
        <div>
            {/* HEADER */}
            <section>
                <div className="flex flex-col items-center mt-20 mb-12 sm:mb-32">
                    <h1 className="self-start sm:self-center ml-2 font-extrabold text-[52px] sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-0 sm:mb-4 z-10">
                        Skihütte mieten
                    </h1>
                    <p className="text-orange-500 text-lg sm:text-2xl mx-4 md:self-center md:mx-12 sm:text-center">
                        Kontaktieren Sie unseren Hüttenwart und vereinbaren Sie mit ihm
                        einen geiegneten Termin zur Hüttenmietung!
                    </p>
                </div>
            </section>

            {/* KONTAKT-FORMULAR */}
            <section>
                <div className="bg-white mt-10">
                    <div className="flex flex-col sticky top-24 md:mx-40">
                        <Card className="mb-5 md:mb-24 mx-4 md:mx-14 flex flex-col items-center md:items-center animate-zoom zoom shadow-xl bg-[#EFF7FF]">
                            <div className="">
                                <CardHeader className="-ml-2 mb-4 mt-12">
                                    <p className="font-bold text-3xl lg:text-5xl">Hier ihre Informationen angeben:</p>
                                    <p className="text-gray-600">Weitere Informationen bezüglich der Skihütte, sowie die Mietpreise, finden Sie auf der Startseite unter der Kategorie: Skihütte des SC-Wehingen.</p>
                                </CardHeader>
                                <CardContent className="text-lg sm:mb-4">
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        method="POST"
                                        action={""} //safari auto fill umgehen
                                        className="mb-10"
                                    >
                                        <div className="flex w-full gap-5 sm:gap-10 mb-4">
                                            <div>
                                                <label className="block font-semibold text-lg mb-2 ">
                                                    Vorname:
                                                </label>
                                                <input
                                                    {...register("firstName", {
                                                        required: "Bitte geben Sie einen Vornamen an",
                                                        minLength: {
                                                            value: 2,
                                                            message: "Bitte geben Sie einen gültigen Vornamen an"
                                                        }
                                                    })}
                                                    type="text"
                                                    placeholder="Ihren Name"
                                                    className={`p-2 border border-orange-200 rounded-xl w-full ${errors.firstName && "border-2 border-red-500"}`}
                                                />
                                                {errors.firstName && (
                                                    <p className="font-light text-xs text-red-500">{`${errors.firstName?.message}`}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block font-semibold text-lg mb-2 ">
                                                    Nachname:
                                                </label>
                                                <input
                                                    {...register("lastName", {
                                                        required: "Bitte geben Sie einen Nachnamen an",
                                                        minLength: {
                                                            value: 2,
                                                            message: "Bitte geben Sie einen gültigen Nachnamen an",
                                                        }
                                                    }
                                                    )}
                                                    type="text"
                                                    placeholder="Ihren Name"
                                                    className={`p-2 border border-orange-200 rounded-xl w-full ${errors.lastName && "border-2 border-red-500"}`}
                                                />
                                                {errors.lastName && (
                                                    <p className="font-light text-xs text-red-500">{`${errors.lastName?.message}`}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="block font-semibold text-lg mb-2 ">
                                                Ihre E-Mail:
                                            </label>
                                            <input
                                                {...register("email", {
                                                    required: "Bitte geben Sie eine E-Mail an",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Bitte geben Sie eine gültige E-Mail an"
                                                    }
                                                })}
                                                type="email"
                                                placeholder="Ihre E-Mail"
                                                className={`p-2 border border-orange-200 rounded-xl w-full ${errors.email && "border-2 border-red-500"}`}
                                            />
                                            {errors.email && (
                                                <p className="font-light text-xs text-red-500">{`${errors.email?.message}`}</p>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <label className="block font-semibold text-lg mb-2">
                                                Ihre Nachricht:
                                            </label>
                                            <textarea
                                                {...register("message", {
                                                    minLength: {
                                                        value: 5,
                                                        message: "Bitte geben Sie eine gültige Nachricht ein (min. 5 Zeichen)"
                                                    }
                                                })}
                                                placeholder="Ihre Nachricht - Wann Sie die Skihütte mieten möchten, wie Sie diese verwenden möchten"
                                                className={`p-2 border border-orange-200 rounded-xl w-full h-56 ${errors.message && "border-2 border-red-500"}`}
                                            />
                                            {errors.message && (
                                                <p className="font-light text-xs text-red-500">{`${errors.message?.message}`}</p>
                                            )}
                                        </div>

                                        {/* FormResultUI - Responsive antwort */}
                                        <div>
                                            {!success && !error ?
                                                <button
                                                    type="submit"
                                                    className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-orange-600"
                                                >
                                                    {isSubmitting ? "wird gesendet ..." : "Nachricht Senden"}
                                                </button>
                                                :
                                                <div className="text-center mt-5 -mb-10">
                                                    {success && (
                                                        <div>
                                                            <p className="mb-5" style={{ color: "green" }}>Nachricht wurde erfolgreich gesendet!</p>
                                                            <Link
                                                                href={"/"}
                                                                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-orange-600"
                                                            >
                                                                Zurück
                                                            </Link>
                                                        </div>
                                                    )}
                                                    {error && (
                                                        <div>
                                                            <p className="mb-5" style={{ color: "red" }}>Senden Fehlgeschlagen :(</p>
                                                            <button
                                                                onClick={() => {
                                                                    location.reload();
                                                                }}
                                                                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-orange-600"
                                                            >
                                                                erneut versuchen
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            }
                                        </div>
                                    </form>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};



export default FormularKontakt;
