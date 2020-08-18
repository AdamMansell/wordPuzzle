$(document).ready(function () {
  $("#userInput").submit(function (event) {
    const normalSentence = $("input.sentence").val();
    let sentText = normalSentence.toString()
    // let vowSent = [sentText];
    let withoutVows = []

    // Removal via .map()  ------------------------
    // removeVow = vowSent.map(function (string) {
    //     return string.replace(/[aeiou]/g, '-');
    // });
    // console.log(vowSent);
    // console.log(removeVow);


    // Removal via For loop -----------------------
    for (let i = 0; i < sentText.length; i++) {
      let withVowels = sentText.charAt(i);
      function removeVowels(input) {
        return input.replace(/[aeiou]/g, "-");
      }
      let newSent = removeVowels(withVowels);
      withoutVows.push(newSent);
    }

    $(".result").text(withoutVows);
    document.getElementById('clear').value="";
    $(".resutlt").show();


    $("#story").show();

    event.preventDefault();
  });
});
