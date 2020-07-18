Copy-Item "./build/*" -Destination "server/build" -Recurse -force
Remove-Item "./build/*" -Recurse -force
Remove-Item "./build" -Recurse -force