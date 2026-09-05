# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.10] - 2026-09-05

### Fixed

- Preserve fieldset imports when injecting the hidden `_visual_id` field into blueprints.
- Prevent visual ID mutation during blueprint builder requests in the Control Panel.

## [0.1.9] - 2026-09-05

### Fixed

- Tighten hover guards so hover state no longer leaks between the preview iframe and the Control Panel.

### Added

- Test coverage for switching tabs and activating fields in the Control Panel.

## [0.1.8] - 2026-03-19

### Changed

- Documentation clean-up in the addon and project READMEs.

## [0.1.7] - 2026-03-19

### Fixed

- Removed the unsupported video tag from the README demo section.

## [0.1.6] - 2026-03-19

### Changed

- Reworked the demo section in the README.

## [0.1.5] - 2026-03-19

### Changed

- Refactored visual ID handling for more reliable set targeting.
- Optimized the demo blueprint and extended the README with setup docs and a demo video.

## [0.1.4] - 2026-03-19

### Changed

- Reworked Visual Editor documentation and agent skills.
- Streamlined addon build and test scripts; quieter Playwright output.
- Sync workflow now only pushes to the standalone repository when a new version is tagged.

## [0.1.3] - 2026-03-19

### Added

- Grid row support: Grid items can now be targeted like Replicator and Bard sets.

### Fixed

- Corrected the built assets shipped with the package.

## [0.1.2] - 2026-03-18

### Added

- `blueprint=` parameter on the `visual_edit` tag to resolve field labels from an explicit blueprint.
- Expanded Blade usage documentation.

## [0.1.1] - 2026-03-18

### Fixed

- Release workflow now builds and commits the addon's JS assets before syncing.

## [0.1.0] - 2026-03-18

Initial release.

### Added

- Click-to-edit for Statamic 6 Live Preview: clicking an annotated element expands, scrolls to, and highlights the matching field in the Control Panel.
- Set targeting for Replicator, Bard, and Grid items via an auto-injected hidden `_visual_id` field.
- Field targeting by handle, including dot notation for grouped fields.
- `{{ visual_edit }}` Antlers tag and `Statamic::tag('visual_edit')` Blade support, with dual-mode (set and field) behavior.
- Bidirectional highlighting: hovering in the Control Panel highlights the element in the preview and vice versa.
- Automatic tab switching when a targeted field lives in an inactive tab.
- Field label resolution from blueprints, `outline-inside` attribute support, and a pulse animation for focused fields.
- Nested Replicator support, including visual IDs injected into nested sets.
- Zero production footprint: all annotations are stripped outside of Live Preview.

[Unreleased]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.10...HEAD
[0.1.10]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/mariohamann/statamic-visual-editor/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/mariohamann/statamic-visual-editor/releases/tag/v0.1.0
