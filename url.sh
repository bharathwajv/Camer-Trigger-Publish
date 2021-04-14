#!/bin/bash

export DOTNET_ROOT=$HOME/dotnet-arm32

export PATH=$PATH:$HOME/dotnet-arm32

#dotnet --info

#chmod 766 WebcamjsDemo.dll

echo "AAEESYS camara Trigger"

dotnet WebcamjsDemo.dll & 
P1=$!

sleep 10

echo "Opning Chrome Browser"
chromium-browser "http://localhost:5000" &
P2=$!

handler()
{
	#echo "Closing the App"
	kill -9 $(ps -ef | grep WebcamjsDemo.dll | awk '{print $2}')
	echo "Closing App"
}

sleep 5

echo "Command completed ....!"

trap handler SIGINT

wait $P1 $P2
