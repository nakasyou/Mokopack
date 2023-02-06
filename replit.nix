{ pkgs }: {
    deps = [
      pkgs.cargo
      pkgs.deno
      pkgs.rustup
      pkgs.rustc
      pkgs.rustfmt
      pkgs.cargo-edit
      pkgs.rust-analyzer
    ];
}