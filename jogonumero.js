<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo do Número Secreto</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: #fff;
      text-align: center;
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container {
      background: rgba(0, 0, 0, 0.6);
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0px 4px 15px rgba(0,0,0,0.5);
      width: 350px;
    }

    h1 {
      margin-bottom: 10px;
    }

    .subtitulo {
      font-size: 16px;
      margin-bottom: 20px;
      color: #ffeb3b; /* Amarelo para destacar */
    }

    input {
      padding: 10px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 15px;
      width: 120px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background: #ff9800;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #e68900;
    }

    #resultado {
      margin-top: 15px;
      font-size: 18px;
      font-weight: bold;
      color: white; /* cor base, será sobrescrita no JS */
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Jogo do Número Secreto</h1>
    <p class="subtitulo">Escolha um número entre <strong>1 e 10</strong></p>
    <input type="number" id="chute" min="1" max="10" placeholder="Digite seu número">
    <br>
    <button onclick="verificarChute()">Chutar</button>
    <p id="resultado"></p>
  </div>

  <!-- Biblioteca de confete -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  <!-- Seu JS -->
  <script src="jogonumero.js"></script>
</body>
</html>
