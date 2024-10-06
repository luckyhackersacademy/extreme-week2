CREATE TABLE `generations` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`audio_id` text NOT NULL,
	`created_at` integer DEFAULT (CURRENT_DATE) NOT NULL
);
