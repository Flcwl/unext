const _isServer = () => {
  return (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  );
};

export const isServer = (() => _isServer())();
