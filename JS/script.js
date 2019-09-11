$(document).ready(
  function()
  {
      $(".facebook").mouseenter(
        function()
        {
            $(".facebook").css("width","3.5%");
        }
      );

      $(".facebook").mouseleave(
        function()
        {
            $(".facebook").css("width","3%");
        }
      );

      $(".instagram").mouseenter(
        function()
        {
            $(".instagram").css("width","3.5%");
        }
      );

      $(".instagram").mouseleave(
        function()
        {
            $(".instagram").css("width","3%");
        }
      );

      $(".twitter").mouseenter(
        function()
        {
            $(".twitter").css("width","3.5%");
        }
      );

      $(".twitter").mouseleave(
        function()
        {
            $(".twitter").css("width","3%");
        }
      );
  }
);
