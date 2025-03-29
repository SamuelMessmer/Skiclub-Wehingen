"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const FormularKontakt = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);

    const emailData = {
      firstName,
      lastName,
      email,
      message,
    }

    const response = await fetch("api/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData)
    });

    setLoading(false)

    if (!response.ok) {
      setError(true)
      return;
    }

    setSuccess(true)
  }

  return (
    <div>
      <section>
        <div className="flex flex-col items-center mt-20 mb-12 sm:mb-32">
          <h1 className="self-start sm:self-center ml-2 font-extrabold text-[52px] sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-0 sm:mb-4 z-10">
            Skihütte mieten
          </h1>
          <p className="text-orange-500 text-lg sm:text-2xl mx-4 md:self-center md:mx-12 sm:text-center">
            Kontaktieren Sie unseren Hüttenwart und vereinbaren Sie mit ihm
            einen geiegneten Termin zur hüttenmietung!
          </p>
        </div>
      </section>

      {/* KONTAKT-FORMULAR */}
      <section>
        <div className="bg-white mt-10">
          <div className="flex flex-col sticky top-24 md:mx-40">
            <Card className="mb-5 md:mb-24 mx-4 md:mx-14 flex flex-col items-center md:items-center animate-zoom zoom shadow-xl bg-[#EFF7FF]">
              <div className="">
                <CardHeader className=" font-bold text-3xl lg:text-5xl -ml-2 mb-4 mt-12">
                  Hier ihre Informationen angeben:
                </CardHeader>
                <CardContent className="text-lg sm:mb-4">
                  <form
                    // action="https://api.web3forms.com/submit"
                    onSubmit={handleSubmit}
                    method="POST"
                    action={""} //safari auto fill umgehen
                    className="mb-10"
                  >
                    {/* <input
                      type="hidden"
                      name="access_key"
                      value="cad5a6f2-8ca8-4c75-aa28-2c42ee8905ec"
                    /> */}

                    <div className="flex w-full gap-5 sm:gap-10 mb-4">
                      <div>
                        <label className="block font-semibold text-lg mb-2 ">
                          Vorname:
                        </label>
                        <input
                          type="text"
                          name="Vorname"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Ihren Name"
                          className="p-2 border border-orange-200 rounded-xl w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-lg mb-2 ">
                          Nachname:
                        </label>
                        <input
                          type="text"
                          name="Nachname"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Ihren Name"
                          className="p-2 border border-orange-200 rounded-xl w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold text-lg mb-2 ">
                        Ihre E-Mail:
                      </label>
                      <input
                        type="email"
                        name="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Inhalt eingeben"
                        className="p-2 border border-orange-200 rounded-xl w-full"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold text-lg mb-2">
                        Ihre Nachricht:
                      </label>
                      <textarea
                        name="Nachricht"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ihre Nachricht - Wann Sie die Skihütte mieten möchten"
                        className="p-2 border border-orange-200 rounded-xl w-full h-56"
                        required
                      />
                    </div>

                    {/* FormResultUI - Responsive antwortj */}
                    <div>
                      {!success && !error ?
                        <button
                          type="submit"
                          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-orange-600"
                        >
                          {loading ? "wird gesendet ..." : "Nachricht Senden"}
                        </button>
                        :
                        <p className="text-center mt-5 -mb-10">
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
                              <Link
                                href={"/"}
                                onClick={() => {
                                  // setLoading(false);
                                  // setError(false);
                                }}
                                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-orange-600"
                              >
                                erneut versuchen
                              </Link>
                            </div>
                          )}
                        </p>
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