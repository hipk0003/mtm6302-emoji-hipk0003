const $emoji =document.getElementById('emoji')

const emojis =[ ]

for (let i = 128515; i < 128575; i++) {
    emojis.push(`
    <p style="text-align: center;" class="emj">
            <span style="font-size: 5rem;">&#${i}</span><br>
            <code>${i}</code>
            </p>
    `)
}

$emoji.innerHTML+=emojis.join('')