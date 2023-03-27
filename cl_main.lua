-- @main

RegisterCommand('testnotify', function ()
    TriggerEvent('bcs-notify', 'Test Notify success. BCS Scripts.', 'success')
    TriggerEvent('bcs-notify', 'Test Notify error. BCS Scripts.', 'error')
    TriggerEvent('bcs-notify', 'Test Notify info. BCS Scripts.')
end)

RegisterNetEvent('bcs-notify', function (text, type, timeout)
    if timeout == nil then
        timeout = 5000
    end
    ShowNotify(text, type, timeout)
end)

function ShowNotify(text, type, timeout)
    SendNUIMessage({
        action = 'ShowNotify',
        text = ConvertMessage(text),
        type = type,
        timeout = timeout
    })
end

function ConvertMessage(text)
    text = text:gsub("~r~", "<span style=Color:red;>") 
    text = text:gsub("~b~", "<span style='Color:rgb(0, 213, 255);'>")
    text = text:gsub("~f~", "<span style='Color:rgb(4, 69, 155);'>")
    text = text:gsub("~g~", "<span style='Color:rgb(0, 255, 68);'>")
    text = text:gsub("~y~", "<span style=Color:yellow;>")
    text = text:gsub("~p~", "<span style='Color:rgb(220, 0, 255);'>")
    text = text:gsub("~c~", "<span style=Color:grey;>")
    text = text:gsub("~m~", "<span style=Color:darkgrey;>")
    text = text:gsub("~u~", "<span style=Color:black;>")
    text = text:gsub("~o~", "<span style=Color:gold;>")
    text = text:gsub("~s~", "</span>")
    text = text:gsub("~w~", "</span>")
    text = text:gsub("~b~", "<b>")
    text = text:gsub("~n~", "<br>")
    text = "<span style=Color:white;>" .. text .. "</span>"

    return text
end