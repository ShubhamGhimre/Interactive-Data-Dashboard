"use client"
import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex items-center space-x-2 dark">
      <Switch id="airplane-mode"  />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default ModeSwitch;
