"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const imageOptions = ["Image 1", "Image 2", "Image 3", "Image 4"];
const durations = [
  { value: "30", label: "30 seconds" },
  { value: "60", label: "60 seconds" },
];
const storyTypes = [
  { value: "anime", label: "Anime Story" },
  { value: "scifi", label: "Sci-fi Story" },
  { value: "fiction", label: "Fictional Story" },
  { value: "random", label: "Random Story" },
  { value: "mythological", label: "Mythological Story" },
  { value: "superhero", label: "Superhero Story" },
  { value: "custom", label: "Custom Prompt" },
];

export default function CreateVideo() {
  const [storyType, setStoryType] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");
  const [imageType, setImageType] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ storyType, customPrompt, imageType, duration });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
  <div className="relative">
    <Label htmlFor="storyType">Select the type of short</Label>
    <Select onValueChange={setStoryType} value={storyType}>
      <SelectTrigger id="storyType">
        <SelectValue placeholder="Select a story type" />
      </SelectTrigger>
      <SelectContent className="absolute z-20 w-90 max-w-sm mt-4 font-semibold  bg-white border border-gray-300 rounded-md shadow-lg  ">
        {storyTypes.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

  {storyType === "custom" && (
    <div>
      <Label htmlFor="customPrompt">Custom Prompt</Label>
      <Textarea
        id="customPrompt"
        placeholder="Enter your custom prompt here"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
      />
    </div>
  )}

  <div>
    <Label>Type of Style</Label>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {imageOptions.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={`/placeholder.svg?height=100&width=100`}
            alt={image}
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => setImageType(`type${index + 1}`)}
          />
          <div
            className={`absolute inset-0 border-2 rounded-lg ${
              imageType === `type${index + 1}` ? "border-primary" : "border-transparent"
            }`}
          ></div>
        </div>
      ))}
    </div>
  </div>

  <div>
    <Label>Duration of Video</Label>
    <RadioGroup onValueChange={setDuration} value={duration} className="flex space-x-4">
      {durations.map(({ value, label }) => (
        <div key={value} className="flex items-center space-x-2">
          <RadioGroupItem value={value} id={`duration-${value}`} />
          <Label htmlFor={`duration-${value}`} className="font-normal">
            {label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>

  <Button type="submit" className="px-5 py-2 bg-black text-white hover:bg-black rounded-xl font-semibold">Generate Story</Button>
</form>
  );
}
