"use client";
import React from "react";
import { Editor } from "@tiptap/react"
import { Toggle } from "@/components/ui/toggle";
import {
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Bold,
    Heading1,
    Heading2,
    Heading3,
    Highlighter,
    Italic,
    List,
    ListOrdered,
    Strikethrough
} from 'lucide-react';


const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null
    }

    const editorOptions = [
        {
            icon: <Heading1 className="size-5" />,
            onClick: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
            pressed: editor?.isActive("heading", { level: 1 }),
        },
        {
            icon: <Heading2 className="size-5" />,
            onClick: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
            pressed: editor?.isActive("heading", { level: 2 }),
        },
        {
            icon: <Heading3 className="size-5" />,
            onClick: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
            pressed: editor?.isActive("heading", { level: 3 }),
        },
        {
            icon: <Bold className="size-5" />,
            onClick: () => editor?.chain().focus().toggleBold().run(),
            pressed: editor?.isActive("bold"),
        },
        {
            icon: <Italic className="size-5" />,
            onClick: () => editor?.chain().focus().toggleItalic().run(),
            pressed: editor?.isActive("italic"),
        },
        {
            icon: <Strikethrough className="size-5" />,
            onClick: () => editor?.chain().focus().toggleStrike().run(),
            pressed: editor?.isActive("strike"),
        },
        {
            icon: <AlignLeft className="size-5" />,
            onClick: () => editor?.chain().focus().setTextAlign("left").run(),
            pressed: editor?.isActive({ textAlign: "left" }),
        },
        {
            icon: <AlignCenter className="size-5" />,
            onClick: () => editor?.chain().focus().setTextAlign("center").run(),
            pressed: editor?.isActive({ textAlign: "center" }),
        },
        {
            icon: <AlignRight className="size-5" />,
            onClick: () => editor?.chain().focus().setTextAlign("right").run(),
            pressed: editor?.isActive({ textAlign: "right" }),
        },
        {
            icon: <AlignJustify className="size-5" />,
            onClick: () => editor?.chain().focus().setTextAlign("justify").run(),
            pressed: editor?.isActive({ textAlign: "justify" }),
        },
        {
            icon: <List className="size-5" />,
            onClick: () => editor?.chain().focus().toggleBulletList().run(),
            pressed: editor?.isActive("bulletList"),
        },
        {
            icon: <ListOrdered className="size-5" />,
            onClick: () => editor?.chain().focus().toggleOrderedList().run(),
            pressed: editor?.isActive("orderedList"),
        },
        {
            icon: <Highlighter className="size-5" />,
            onClick: () => editor?.chain().focus().toggleHighlight().run(),
            pressed: editor?.isActive("highlight"),
        },
    ];


    return (
        <div className="border rounded-md p-1 bg-slate-50 space-x-2 z-50">
            {editorOptions.map((editorOption, index) => (
                <Toggle
                    key={index}
                    pressed={editorOption.pressed}
                    onPressedChange={editorOption.onClick}
                >
                    {editorOption.icon}
                </Toggle>
            ))}
        </div>
    )
}

export default MenuBar
