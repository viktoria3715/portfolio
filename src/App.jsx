
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Sidebar / Intro */}
      <div className="flex flex-col justify-center items-start space-y-6">
        <img
          src="/your-photo.jpg"
          alt="Viktoria Nikolaeva"
          className="rounded-full w-40 h-40 object-cover border"
        />
        <h1 className="text-4xl font-bold">Viktoria Nikolaeva</h1>
        <p className="text-lg">Graphic Designer / Web3 Content Creator</p>
        <div className="space-y-2">
          <p>Email: <a href="mailto:bulavinafreelance@gmail.com" className="underline">bulavinafreelance@gmail.com</a></p>
          <p>Telegram: <a href="https://t.me/story_viktoria" target="_blank" className="underline">@story_viktoria</a></p>
        </div>
        <div className="flex space-x-4 pt-4">
          <Button asChild>
            <a href="/Viktoria_Nikolaeva_Resume_EN_with_links.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:bulavinafreelance@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 overflow-y-auto">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">PP Box</h2>
            <p className="text-sm text-gray-600 mb-2">Web design in Photoshop</p>
            <a href="https://pp-box.tilda.ws/" className="underline text-blue-600" target="_blank">Visit site</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Sahara AI</h2>
            <p className="text-sm text-gray-600 mb-2">Animations, memes, merch, infographics</p>
            <a href="https://x.com/viki3517/status/1900509400206639496" className="underline text-blue-600" target="_blank">View example</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Linera</h2>
            <p className="text-sm text-gray-600 mb-2">Infographics and video design</p>
            <a href="https://x.com/viki3517/status/1909520430555181084" className="underline text-blue-600" target="_blank">View example</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Fraction AI</h2>
            <p className="text-sm text-gray-600 mb-2">Brand kit, animations, infographics</p>
            <a href="https://drive.google.com/drive/folders/1OsmF2cTroMjbdDvu07dwqWlSIbzjEW7N" className="underline text-blue-600" target="_blank">View brand kit</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Somnia</h2>
            <p className="text-sm text-gray-600 mb-2">3D, infographics, merch, mascots</p>
            <a href="https://x.com/viki3517/status/1922241997727007219" className="underline text-blue-600" target="_blank">Watch animation</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Plume</h2>
            <p className="text-sm text-gray-600 mb-2">Memes, infographics, animations</p>
            <a href="https://x.com/viki3517/status/1886807662567796864" className="underline text-blue-600" target="_blank">View meme</a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
